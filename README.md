# Zynthinator 0.0.3

![Alt Text](https://github.com/fredrik-hjarner/Zynthinator/blob/development/2018-01-21-02-27-34.gif)

[Test out Zynthinator (not guaranteed to be lastest version)](https://fredrik-hjarner.github.io/Zynthinator/ "Test out Zynthinator")

### What

- Essentially provides a graphical user interface to Web Audio API.
- Wraps the Web Audio API nodes types in classes that provides some additional features. For example when you create a sine oscillator you can choose between what values it oscillates, that is not just the Web Audio API-standard of -1 to +1 but you can choose to make it oscillate between any two values.
- Adds new node types. For example Low-Resolution Sine, ADSR, PWM, DigitalSignal, Noise and more.

### Current development state

Not finished at all. I've made a stable ground. I can use it but I have not concentrated upon making it user-friendly for others yet.

If you want it to be more user-friendly, one certain way of achieving that it to add an **issue** in which you explain the problem. That will give me motivation.

### Goals

- Allow to create interesting sounds by combining and mixing basic waveforms with Web Audio API.
- Ability to set as many dynamic parameters as possible, all stored with Redux.
- Nice and maintainable code.
- Intuitive and user-friendly.
- As much as possible should happen in real-time. No loading times. If you want to change frequencies, scales, octaves, inject some stupid node wherever then just do it and notice the results immediately.

### Build/install/run

1. Clone the repository.
2. Run `npm install`.
3. Run `npm start`.
4. Open http://localhost:8080 in browser.
