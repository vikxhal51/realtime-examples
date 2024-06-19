import FileUpload from './components/FileUpload';

function App() {

  return (
    <div className="font-inter system-ui avenir helvetica arial sans-serif text-white bg-gray-800 text-lg font-normal leading-6 p-8">
      <h1 className="text-3xl font-semibold mb-4 shadow-lg p-3 rounded-lg bg-gray-700">Video Surveillance</h1>
      <div className="mx-auto bg-gray-900 p-6 rounded-lg shadow-xl">
        <FileUpload />
      </div>
    </div>
  )
}

export default App
