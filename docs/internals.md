# Internals

Summary of things from: https://www.reactnative.guide/

- Not a webview (unlike Cordova and other similar things)
- Renders using native views
- Direct access to Native APIs & Views offered by Mobile OS
- Not compiled to Native code (unlike Google Flutter)
- Consider it a set of React components for native applications

## Architecture

### React Native Platform

#### Native Code / Modules

- Written in Mobile OS language: i.e. Swift for iOS

#### JavaScript VM

- Runs JS code
- Uses JavaScriptCore the JS engine that powers Safari
- In iOS uses the JavaScriptCore bundled with the iOS
- On Android bundles its own version of JavaScriptCore


#### React Native Bridge

- C++/Java bridge that allows communication between the native and JS thread
- Custom protocol is used for messaging

![React Native Achitecture](https://www.reactnative.guide/assets/images/rn-architecture.png)

### App Launch

- First thing loaded is *native entrypoint*
- Native threads spawns JSVM thread which in turn runs JS code
- Native and JSVM thread communicate over React Native Bridge
- JSVM thread informs what needs to be created/updated and etc
- Operations through React Native Bridge are batched

## Threading Model

When React Native app is launched several threads are spawn.

### Main Thread (Native Queue)

- Listens for UI events such as `press`, `touch` and else, then passes them to JS Thread
- Listens from JS Thread on what needs to be rendered, information that is used by **shadow node thread** that computes layouts

### JavaScript Thread (JS Queue)

- Where main bundle JS runs all the logic, the coce we wrote for React Native

### Custom Native Modules

- Apart from what is already spawned by React Native one can also spawn threads for custom native modules to speed up the performance of the app (i.e. Animations, to offload the work from the JS Thread)

## View Managers

- A native module that maps JSX Views onto Native Views
- They basically build up Native Views from the ones provided through React Native component
