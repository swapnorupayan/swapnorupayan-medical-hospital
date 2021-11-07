import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebfase.init"

initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    //Google sing in function
    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)


    }

    //github sing in function
    const signInUsingGithub = () => {
        setIsLoading(true);
        const githubProvider = new GithubAuthProvider();

        return signInWithPopup(auth, githubProvider)


    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])



    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => setUser({}))
            .finally(() => setIsLoading(false));
    }
    return {
        user,
        isLoading,
        signInUsingGoogle,
        signInUsingGithub,
        logOut,
        setIsLoading
    }
}

export default useFirebase;