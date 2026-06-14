import React, { useEffect, useState } from 'react';

export default function CleanImage({ src, alt, className }) {
  const [processedSrc, setProcessedSrc] = useState('');

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const w = img.width;
      const h = img.height;
      canvas.width = w;
      canvas.height = h;

      ctx.drawImage(img, 0, 0);
      const imgData = ctx.getImageData(0, 0, w, h);
      const data = imgData.data;

      // 1. Mark background pixels using BFS flood fill
      const visited = new Uint8Array(w * h);
      const queue = [];
      let head = 0;

      const checkAndAdd = (x, y) => {
        if (x < 0 || x >= w || y < 0 || y >= h) return;
        const idx = y * w + x;
        if (visited[idx]) return;

        const pIdx = idx * 4;
        const r = data[pIdx];
        const g = data[pIdx + 1];
        const b = data[pIdx + 2];

        // Background is off-white (typically R, G, B > 185)
        const isLight = r > 185 && g > 185 && b > 185;
        if (isLight) {
          visited[idx] = 1;
          queue.push(idx);
        }
      };

      // Seed queue from all border edges
      for (let x = 0; x < w; x++) {
        checkAndAdd(x, 0);
        checkAndAdd(x, h - 1);
      }
      for (let y = 0; y < h; y++) {
        checkAndAdd(0, y);
        checkAndAdd(w - 1, y);
      }

      // BFS traversal
      while (head < queue.length) {
        const curr = queue[head++];
        const cx = curr % w;
        const cy = Math.floor(curr / w);

        checkAndAdd(cx + 1, cy);
        checkAndAdd(cx - 1, cy);
        checkAndAdd(cx, cy + 1);
        checkAndAdd(cx, cy - 1);
      }

      // 2. Apply transparency and smooth edge feathering
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const idx = y * w + x;
          const pIdx = idx * 4;

          if (visited[idx]) {
            // Check if adjacent to scooter pixels (for anti-aliasing)
            let isEdge = false;
            for (let dy = -1; dy <= 1; dy++) {
              for (let dx = -1; dx <= 1; dx++) {
                const nx = x + dx;
                const ny = y + dy;
                if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
                  if (!visited[ny * w + nx]) {
                    isEdge = true;
                    break;
                  }
                }
              }
              if (isEdge) break;
            }

            if (isEdge) {
              const r = data[pIdx];
              const g = data[pIdx + 1];
              const b = data[pIdx + 2];
              const brightness = (r + g + b) / 3;
              // Smoothly blend edges (brightness between 185 and 235 maps to alpha 255 to 0)
              const alpha = Math.max(0, Math.min(255, Math.floor(((235 - brightness) / 50) * 255)));
              data[pIdx + 3] = alpha;
            } else {
              data[pIdx + 3] = 0; // Outer background
            }
          }
        }
      }

      ctx.putImageData(imgData, 0, 0);
      setProcessedSrc(canvas.toDataURL('image/png'));
    };
    img.onerror = () => {
      // Fallback
      setProcessedSrc(src);
    };
  }, [src]);

  if (!processedSrc) {
    return <div className="w-full h-96 animate-pulse bg-white/5 rounded-3xl" />;
  }

  return (
    <img
      src={processedSrc}
      alt={alt}
      className={className}
      loading="eager"
    />
  );
}
