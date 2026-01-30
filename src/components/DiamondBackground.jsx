import React, { useEffect, useRef } from 'react';

const DiamondBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const diamonds = [];
    const diamondCount = 30;

    class Diamond {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height + height; // Start below screen
        this.size = Math.random() * 20 + 5;
        this.speed = Math.random() * 0.5 + 0.1;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.color = Math.random() > 0.5 ? 'rgba(0, 243, 255,' : 'rgba(188, 19, 254,'; // Cyan or Violet
      }

      update() {
        this.y -= this.speed;
        this.rotation += this.rotationSpeed;

        // Reset if goes off top
        if (this.y < -50) {
          this.reset();
          this.y = height + 50;
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        ctx.strokeStyle = `${this.color}${this.opacity})`;
        ctx.fillStyle = `${this.color}${this.opacity * 0.2})`;
        ctx.lineWidth = 1;

        ctx.beginPath();
        ctx.moveTo(0, -this.size);
        ctx.lineTo(this.size, 0);
        ctx.lineTo(0, this.size);
        ctx.lineTo(-this.size, 0);
        ctx.closePath();

        ctx.stroke();
        ctx.fill();

        ctx.restore();
      }
    }

    // Initialize diamonds
    for (let i = 0; i < diamondCount; i++) {
      const d = new Diamond();
      d.y = Math.random() * height; // Distribute initially
      diamonds.push(d);
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw background gradient connection lines (optional, keep simple for now)

      diamonds.forEach(diamond => {
        diamond.update();
        diamond.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: 'radial-gradient(circle at center, #0a0a0f 0%, #000000 100%)',
        pointerEvents: 'none'
      }}
    />
  );
};

export default DiamondBackground;
