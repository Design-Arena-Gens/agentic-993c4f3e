import Image from 'next/image';

const lightColors = ['#ffd700', '#ff6b6b', '#7afcff', '#ffe066', '#b197fc'];

export default function Home() {
  return (
    <div className="page">
      <header className="header">
        <div className="brand">
          <span className="brand-mark">big</span>
          <span className="brand-name">Christmas tree</span>
        </div>
        <div className="light-garland" aria-hidden>
          {Array.from({ length: 24 }).map((_, index) => (
            <span
              key={index}
              className="light-bulb"
              style={{
                backgroundColor: lightColors[index % lightColors.length],
                animationDelay: `${index * 120}ms`
              }}
            />
          ))}
        </div>
      </header>
      <main className="hero">
        <div className="tree-frame">
          <div className="tree-aura" />
          <Image
            src="https://images.unsplash.com/photo-1544211412-2a2c0b2c0b7e"
            alt="A hyper-realistic, opulent Christmas tree with luxurious ornaments"
            width={1600}
            height={2400}
            priority
            className="tree-image"
          />
          <div className="tree-overlay" />
        </div>
      </main>
    </div>
  );
}
