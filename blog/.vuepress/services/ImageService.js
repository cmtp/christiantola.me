import firebase from './firebase';
import 'firebase/storage';

const storage = firebase.storage();

const getImage = async (name) => {
    let pathRef = storage.ref();
    let imagesRef = pathRef.child(name)
    let url = await imagesRef.getDownloadURL();
    if(!url) {
        throw new Error('something is not working');
    }
    return url;
};

export default {
    getImage
}