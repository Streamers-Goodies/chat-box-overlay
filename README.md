# Chat Box Overlay App

An Electron application designed to provide a chat box overlay with additional configurations. It is especially optimized for gamers who use a single screen, allowing them to view and manage their chat while playing without interruptions.

## Features

- Transparent overlay for chat
- Always on top
- Configurable user ID
- Content protection
- Ignore mouse events

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/tu-usuario/chat-box-overlay-app.git
   cd chat-box-overlay-app
   ```

2. Install dependencies:

   ```sh
   bun install
   ```

3. Build the application:

   ```sh
   bun run dist:win
   ```

## Usage

1. Start the application in development mode:

   ```sh
   bun run dev:react
   ```
   ```sh
   bun run dev:electron
   ```

2. Build the application for production:

   ```sh
   bun run build
   ```

3. Package the application for distribution:

   ```sh
   bun run dist:win
   ```

## Configuration

The application uses a configuration window to set the user ID. Once the user ID is set, the main window will display the chat box overlay.

## Development

### Folder Structure

- `src/electron`: Contains the Electron main process code.
- `src/ui`: Contains the React components and UI code.

### Main Process

The main process is defined in `src/electron/main.ts`. It creates the main window and the configuration window, and handles IPC events.

### UI

The UI is built with React and Tailwind CSS. The entry point for the UI is `src/ui/main.tsx`.

### Scripts

- `dev:react`: Runs the React application in development mode.
- `dev:electron`: Runs the Electron application in development mode.
- `build`: Builds the application for production.
- `dist:win`: Packages the application for Windows.
- `dist:mac`: Packages the application for macOS.
- `dist:linux`: Packages the application for Linux.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License.
