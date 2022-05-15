 [![forthebadge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://forthebadge.com) 

 **NPM link**

[react modal by anissa on NPM](https://www.npmjs.com/package/anissa_p14_modal)
# Modal Component with Reactjs

This plugin was bootstrapped with Create-React-app .

## Feature

show a basic modal , with close button.
## install

 `npm i anissa_p14_modal` 

 or

 `yarn add anissa_p14_modal`

 ## use

| props   | action   | Example                                     |  
|---------|----------|---------------------------------------------|
| show    | state    | if  `true`  the modal is open               |   
| setshow | handler  | modify the state by `onClick` On the button |  
| text    | string   | text of the modal                           |  
 ## example
 
 ```javascript
  // 1 - Import the Modal component into the file
    import { Modal } from 'anissa_p14_modal';

    const App = () => {
        // 2 - Setup state and handler for the modal
        const [modalIsOpen, setModalIsOpen] = useState(false);
        
     return (
    <>
        <Modal
          show={modalIsOpen}
          setShow={setModalIsOpen}
          text="Employee has been created!"
        />
    </>
        )
        }

 ```
 ## result

 [Result](https://postimg.cc/k6TDCXJ5)

 ## Author
  Anissa Mandhouj
