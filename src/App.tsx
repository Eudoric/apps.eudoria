import Calendar from './components/Calendar';
import NotificationManager from './components/NotificationManager';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <NotificationManager />
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Eudoria Calendar</h1>
          <p className="text-lg text-gray-600">The Sacred Noga Timekeeping System</p>
        </header>

        <main>
          <Calendar />
        </main>

        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>&copy; 2026 Apps Eudoria. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;