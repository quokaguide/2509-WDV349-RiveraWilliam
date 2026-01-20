export default function BottomNav() {
    const bar = { position:"fixed", bottom:0, left:0, right:0, borderTop:"1px solid #eee", display:"flex" };
    const btn = { flex:1, padding:12, textAlign:"center" };
    return (
      <nav style={bar}>
        <a style={btn} href="/">Home</a>
        <a style={btn} href="/explore">Explore</a>
        <a style={btn} href="/saved">Saved</a>
      </nav>
    );
  }
  