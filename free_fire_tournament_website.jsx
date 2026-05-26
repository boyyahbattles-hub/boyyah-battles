import { useState } from 'react';

export default function FreeFireTournamentWebsite() {
  const [teamName, setTeamName] = useState('');
  const [leaderName, setLeaderName] = useState('');
  const [uid, setUid] = useState('');
  const [contact, setContact] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleRegister = () => {
    if (!teamName || !leaderName || !uid || !contact) {
      alert('Please fill all fields');
      return;
    }

    const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSdH-YuYe_e_IJvCBJxcq1r5FQhzJYEXOoWX7Sd-n-5Qsh1L7Q/formResponse?submit=Submit&entry.1959013243=${encodeURIComponent(teamName)}&entry.609008632=${encodeURIComponent(leaderName)}&entry.641381774=${encodeURIComponent(uid)}&entry.1363706888=${encodeURIComponent(contact)}`;

    fetch(formUrl, {
      method: 'POST',
      mode: 'no-cors',
    });

    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 60000);

    setTeamName('');
    setLeaderName('');
    setUid('');
    setContact('');
  };
  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 border-b border-yellow-500/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-yellow-500 text-black flex items-center justify-center font-black text-xl">
              FF
            </div>
            <h1 className="text-2xl font-extrabold tracking-wide uppercase">
              Tournament
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-10 font-bold text-lg">
            <a className="text-yellow-400 border-b-2 border-yellow-400 pb-1">HOME</a>
            <a className="hover:text-yellow-400 transition">TOURNAMENTS</a>
            <a className="hover:text-yellow-400 transition">LEADERBOARD</a>
            <a className="hover:text-yellow-400 transition">RULES</a>
            <a className="hover:text-yellow-400 transition">CONTACT</a>
          </div>

          <a
            href="#register"
            className="bg-yellow-500 hover:bg-yellow-400 transition text-black font-black px-7 py-4 rounded-xl shadow-xl"
          >
            REGISTER NOW
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        className="relative min-h-screen flex items-center pt-32"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1800&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-purple-950/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center w-full">
          <div>
            <h1 className="text-6xl md:text-8xl font-black uppercase leading-none">
              FREE FIRE
            </h1>

            <h2 className="text-5xl md:text-7xl font-black text-yellow-400 uppercase mt-3 leading-none">
              Tournament
            </h2>

            <p className="mt-8 text-3xl font-bold tracking-wide text-gray-200 uppercase">
              Fight. Survive. Win.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <div className="bg-black/60 border border-yellow-500 rounded-2xl px-6 py-4 text-xl font-bold">
                👥 Squad Mode
              </div>

              <div className="bg-black/60 border border-yellow-500 rounded-2xl px-6 py-4 text-xl font-bold">
                ⏰ 4v4 Battle
              </div>
            </div>

            <a
            href="#register"
              className="inline-block mt-10 bg-yellow-500 hover:bg-yellow-400 transition text-black text-2xl font-black px-10 py-5 rounded-2xl shadow-2xl uppercase"
            >
              Register Your Squad →
            </a>
          </div>

          <div className="hidden lg:flex justify-center relative">
            <div className="relative">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3612/3612569.png"
                alt="Squad"
                className="w-[600px] drop-shadow-[0_0_50px_rgba(255,200,0,0.4)]"
              />

              <h2 className="absolute bottom-0 left-10 text-7xl font-black text-yellow-400 uppercase rotate-[-8deg] drop-shadow-2xl">
                Elite Squad
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING TOURNAMENT */}
      <section className="bg-black py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black uppercase text-yellow-400">
              Upcoming Tournament
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-900 to-black border border-yellow-500/20 rounded-[2rem] p-10 text-center">
              <h3 className="text-5xl font-black text-yellow-400">🏆</h3>
              <h2 className="mt-5 text-4xl font-black uppercase">Champions Cup</h2>
              <p className="mt-4 text-2xl text-gray-300 uppercase">Season 1</p>
            </div>

            <div className="bg-zinc-950 border border-yellow-500/20 rounded-[2rem] p-10 flex flex-col justify-center gap-8">
              <div>
                <p className="text-gray-400 uppercase font-bold">Date</p>
                <h3 className="text-4xl font-black text-yellow-400 mt-2">25 MAY 2026</h3>
              </div>

              <div>
                <p className="text-gray-400 uppercase font-bold">Time</p>
                <h3 className="text-4xl font-black text-yellow-400 mt-2">06:00 PM IST</h3>
              </div>

              <div>
                <p className="text-gray-400 uppercase font-bold">Mode</p>
                <h3 className="text-4xl font-black text-yellow-400 mt-2">SQUAD (4V4)</h3>
              </div>
            </div>

            <div className="bg-yellow-500 rounded-[2rem] p-10 text-black flex flex-col justify-center items-center text-center shadow-2xl">
              <h2 className="text-5xl font-black uppercase">Prize Pool</h2>
              <p className="mt-6 text-8xl font-black">₹1,500</p>
            </div>
          </div>
        </div>
      </section>

      {/* TOURNAMENT DETAILS */}
      <section className="bg-zinc-950 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-5xl font-black uppercase text-yellow-400 mb-12">
            Tournament Details
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-black border border-yellow-500/20 rounded-3xl p-8 text-center">
              <h3 className="text-yellow-400 text-2xl font-black uppercase">Entry Fee</h3>
              <p className="mt-5 text-4xl font-black">FREE</p>
            </div>

            <div className="bg-black border border-yellow-500/20 rounded-3xl p-8 text-center">
              <h3 className="text-yellow-400 text-2xl font-black uppercase">Map</h3>
              <p className="mt-5 text-4xl font-black">CS</p>
            </div>

            <div className="bg-black border border-yellow-500/20 rounded-3xl p-8 text-center">
              <h3 className="text-yellow-400 text-2xl font-black uppercase">Type</h3>
              <p className="mt-5 text-4xl font-black">SQUAD</p>
            </div>

            <div className="bg-black border border-yellow-500/20 rounded-3xl p-8 text-center">
              <h3 className="text-yellow-400 text-2xl font-black uppercase">Room</h3>
              <p className="mt-5 text-4xl font-black">CUSTOM</p>
            </div>
          </div>
        </div>
      </section>

      {/* RULES AND PRIZES */}
      <section className="bg-black py-16 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="bg-zinc-950 border border-yellow-500/20 rounded-[2rem] p-10">
            <h2 className="text-5xl font-black uppercase text-yellow-400 mb-8">
              Rules
            </h2>

            <ul className="space-y-5 text-xl text-gray-200">
              <li>• Only Squad (4 Players) are allowed.</li>
              <li>• All matches will be played in Clash Squad mode.</li>
              <li>• Use of hacks / cheats will lead to disqualification.</li>
              <li>• Organizers decision will be final & binding.</li>
              <li>• No abusive behavior / toxicity allowed.</li>
              <li>• Players must join the room on time.</li>
            </ul>

            <button className="mt-10 border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black transition px-8 py-4 rounded-xl text-xl font-black uppercase">
              View All Rules
            </button>
          </div>

          <div className="bg-zinc-950 border border-yellow-500/20 rounded-[2rem] p-10">
            <h2 className="text-5xl font-black uppercase text-yellow-400 mb-8">
              Prize Breakdown
            </h2>

            <div className="space-y-6">
              <div className="bg-yellow-500 text-black rounded-2xl px-8 py-6 flex justify-between items-center">
                <span className="text-3xl font-black uppercase">1st Prize</span>
                <span className="text-4xl font-black">₹1,500</span>
              </div>

              <div className="bg-purple-900 rounded-2xl px-8 py-6 flex justify-between items-center">
                <span className="text-3xl font-black uppercase">2nd Prize</span>
                <span className="text-2xl font-black uppercase text-right">
                  Free Entry For <br /> Next Tournament
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REGISTRATION */}
      <section id="register" className="bg-zinc-950 py-16 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="bg-black border border-yellow-500/20 rounded-[2rem] p-10">
            <h2 className="text-5xl font-black uppercase text-yellow-400 mb-10">
              Register Your Squad
            </h2>

            

            <form className="space-y-6">
              <input
                type="text"
                placeholder="TEAM NAME"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-5 py-5 text-lg outline-none focus:border-yellow-500"
              />

              <input
                type="text"
                placeholder="TEAM LEADER NAME"
                value={leaderName}
                onChange={(e) => setLeaderName(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-5 py-5 text-lg outline-none focus:border-yellow-500"
              />

              <input
                type="text"
                placeholder="FREE FIRE UID"
                value={uid}
                onChange={(e) => setUid(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-5 py-5 text-lg outline-none focus:border-yellow-500"
              />

              <input
                type="tel"
                placeholder="CONTACT NUMBER"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-5 py-5 text-lg outline-none focus:border-yellow-500"
              />

              <button
                type="button"
                onClick={handleRegister}
                className="w-full bg-yellow-500 hover:bg-yellow-400 transition text-black text-2xl font-black py-5 rounded-xl uppercase shadow-2xl"
              >
                Register Now
              </button>

              {showSuccess && (
                <div className="mt-5 bg-green-500/20 border border-green-500 text-green-400 rounded-2xl p-5 text-center font-bold text-lg animate-pulse">
                  ✅ You Have Successfully Registered! Our Team Will Contact You Soon.
                </div>
              )}
            </form>
          </div>

          <div className="bg-black border border-yellow-500/20 rounded-[2rem] p-10 relative overflow-hidden">
            <h2 className="text-5xl font-black uppercase text-yellow-400 mb-8">
              Contact Us
            </h2>

            <div className="space-y-6 text-xl text-gray-200 font-semibold relative z-20">
              <p>📷 Instagram: @boyyah_battles</p>

              <a
                href="https://www.instagram.com/boyyah_battles/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-500 hover:bg-yellow-400 transition text-black font-black px-6 py-4 rounded-xl cursor-pointer relative z-[999]"
              >
                Open Instagram Page
              </a>

              <p className="text-sm text-gray-400 break-all">
                https://www.instagram.com/boyyah_battles/
              </p>

              <p>📧 boyyahbattles@gmail.com</p>
            </div>

            <div className="absolute bottom-0 right-0 opacity-20 pointer-events-none">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3612/3612569.png"
                className="w-[350px]"
              />
            </div>

            <h2 className="absolute bottom-10 right-10 text-7xl font-black text-yellow-400 rotate-[-12deg] z-0 pointer-events-none">
              BOOYAH!
            </h2>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-yellow-500/20 py-8 text-center text-gray-400 text-lg">
        <p>© 2026 FF TOURNAMENT. ALL RIGHTS RESERVED.</p>
        <p className="mt-2 uppercase">Play Fair. Be A Champion.</p>
      </footer>
    </div>
  );
}
