import { useState } from 'react';

export default function FileUploader() {
  const [image, setImage] = useState("");

  const handleImageChange = (e:any) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(URL.createObjectURL(file));
    } else {
      alert("Please select a valid image file.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Upload and Preview Image</h1>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-4"
      />

      {image && (
        <div className="mt-4">
          <img
            src={image}
            alt="Preview"
            className="max-w-md rounded shadow-lg"
          />
        </div>
      )}
    </div>
  );
}
