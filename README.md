# Image Background Customizer

## Overview

The **Image Background Customizer** is a React web application that allows users to upload an image, where the subject (person) retains its original color settings while the background is transformed into black and white. Users can further customize the background with adjustable settings for **blur**, **contrast**, **grayscale**, and **opacity**. The application uses Firebase for Google authentication to ensure secure access.

## Features

- **Google Authentication**: Users can sign in using their Google account.
- **Image Upload**: Upload an image to customize the background.
- **Person/Subject Retention**: The person or subject in the image retains its original color, while the background is processed separately.
- **Background Customization**: Users can apply various effects to the background:
  - Black and White effect.
  - Adjust **Blur**, **Contrast**, **Grayscale**, and **Opacity** levels.
- **Real-Time Preview**: Changes are applied in real-time, allowing users to immediately see the effects.
- **User-Friendly Interface**: Simple interface with sliders to adjust customization options.

## Technologies Used

- **Frontend**:
  - React (with Vite for fast development setup)
  - Tailwind CSS (for styling)
  - Canvas API (for image processing)
  
- **Authentication**:
  - Firebase Authentication (for Google sign-in)

## Installation

1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/tusharsuthar1256/BG_Gray.git
    ```

2. Navigate to the project folder:
    ```bash
    cd image-background-customizer
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the local development server:
    ```bash
    npm run dev
    ```

5. Open the app in your browser at `http://localhost:3000`.

## How to Use

1. **Sign in with Google**: Use the Google authentication to sign in.
2. **Upload an Image**: Upload an image by clicking the **Upload Image** button.
3. **Adjust the Background**: Use the available sliders to customize the background:
   - **Blur**: Adjust the blur effect of the background.
   - **Contrast**: Change the contrast of the background.
   - **Grayscale**: Adjust the amount of grayscale applied to the background.
   - **Opacity**: Control the transparency of the background.
4. Once you’re satisfied with the customization, you can download the modified image by clicking the **Download Image** button.

## Screenshot

**Image Background Customizer in Action**  
</br>
**Home Page -->**
<img src="https://res.cloudinary.com/dti5em2nu/image/upload/v1732639573/gcv95rz6usojnjpm1bhf.png">
</br>
</br>
</br>
**Sign up with google -->**
</br>
</br>
<img src="https://res.cloudinary.com/dti5em2nu/image/upload/v1732639674/dichv6xbcylmsonjhhhw.png" >
</br>
</br>
</br>
**Editior where you customize your image nad process it -->**
</br>
</br>
<img src="https://res.cloudinary.com/dti5em2nu/image/upload/v1732639772/kpgmnmmsnrhntuaxkdhg.png" >

