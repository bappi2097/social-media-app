import React, {useCallback, useContext, useEffect, useState} from 'react';
import AuthContext from './auth-context';

const UnplashContext = React.createContext({
    datas: []
});

export const UnplashContextProvider = (props) => {
    const { publicKey } = useContext(AuthContext);
    const [unplashData, setUnplashData] = useState({});

    const unplashJSON = useCallback(async() => {
        const datas = await fetch(`https://api.unsplash.com/photos/?client_id=${publicKey}`)
            .then((response) => response.json());
        setUnplashData(datas);
    },[setUnplashData, publicKey]);

    useEffect(() => {
        unplashJSON();
    }, [unplashJSON]);

    return (
        <UnplashContext.Provider
            value={{ datas: unplashData }}
        >
            {props.children}
        </UnplashContext.Provider>
    );
}

export default UnplashContext;