const express = require('express');
const router = express.Router();
const roomsTemplateCopy = require('../models/roomsTemplate');

router.post('/createRoom', (request, response) => {
    //response.send('send');
    const signedUpUser = new roomsTemplateCopy ({
       
        roomName:request.body.roomName
        
    })
})


// handleSubmit = async e => {
//     e.preventDefault();
//     const response = await fetch('/api/world', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ post: this.state.post }),
//     });
//     const body = await response.text();
    
//     this.setState({ responseToPost: body });
//   };

module.exports = router