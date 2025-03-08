import requests
import os
image_urls = [
    "https://res.cloudinary.com/daa3y840x/image/upload/a_-90/v1734955230/991e61cd-3a03-48ab-b80d-214a61fe13c6_ffcbfv.jpg",
    "https://res.cloudinary.com/daa3y840x/image/upload/a_-90/v1734955199/3b43b671-3837-4ab5-ae93-b4b4f3a8b27a_xis2va.jpg",
    "http://www.keydesign-themes.com/etalon/catering/wp-content/uploads/sites/19/2017/06/blog2.jpg",
    "https://res.cloudinary.com/daa3y840x/image/upload/v1734955160/6c004137-1db9-411a-95cb-601c02f028f5_y82pt7.jpg",
    "https://www.keydesign-themes.com/etalon/catering/wp-content/uploads/sites/19/2017/06/blog3.jpg"
]
download_folder = "."  
os.makedirs(download_folder, exist_ok=True)
downloaded_files = []
for i,url in enumerate(image_urls):
    try:
        print(f"Trying to download: {url}") 
        response = requests.get(url, stream=True)
        if response.status_code == 200:
            print(f"Success! Downloading {url}")
            file_path = os.path.join(download_folder, f"image_{i+1}.jpg")
            with open(file_path, "wb") as file:
                for chunk in response.iter_content(1024):
                    file.write(chunk)
            downloaded_files.append(file_path)
            print(f"Downloaded: {file_path}")
        else:
            print(f"Failed to download {url}. HTTP Response Code: {response.status_code}")
    except Exception as e:
        print(f"Error downloading {url}: {e}")

print("Download process complete!")
print("Downloaded files:", downloaded_files)
