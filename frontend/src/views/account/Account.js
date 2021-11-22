import React, { useState, useEffect, useContext } from 'react'
import { useParams } from "react-router-dom"

import Connected from 'components/account/connected/Connected'
import Unconnected  from 'components/account/unconnected/Unconnected'
import { truncateAddr } from 'utils/helpers';
import { UserContext } from 'contexts/User';
import { fromWei } from 'utils/helpers';

import Avatar from 'assets/AvatarDark.png';

const Account = () => {
    //Makes page load at top
    window.scrollTo(0, 0);

    const [currentUser, setCurrentUser] = useContext(UserContext);

    const [account, setAccount] = useState();
    const [showConnected, setShowConnected] = useState(false);
    const [isReporter, setIsReporter] = useState(false);
    const [reporting, setReporting] = useState({});
    const [history, setHistory] = useState([]);
    const [activities, setActivities] = useState([]);

    const urlAddress = useParams().address;

    useEffect(() => {
        //if logged in and address matches url then send to connected
        if (currentUser && currentUser.address == urlAddress) {
            currentUser.contracts.balanceOf(currentUser.address).then(result => {
                let balance = fromWei(result)
                //set user account
                setAccount({
                    address: currentUser.address,
                    addressHidden: truncateAddr(currentUser.address),
                    avatar: Avatar,
                    trb: balance,
                })
                setShowConnected(true);
                //set reporting fields
                //TODO: set total report events if any 
                if (balance < 100) {
                    setReporting({
                        earned: balance,
                        current: "",
                        total: 0,
                        lastReported: ""
                    });
                    //TODO : set History if any
                    //setHistory();
                    
                } else {
                    //if reporting 
                    setIsReporter(true);
                    //TODO : add real history
                    setHistory(sampleHistory);
                }
                //set activity fields
                //TODO: use real data
                setActivities(sampleActivities);
            })
        } else {
            //else set up unconnected display

        }
    },[currentUser])

    // TODO: replace variables with redux data
    // const showConnected = true;
    // const isReporter = true;
    
    const userAccount = {
        address: '0x87e6987E',
        addressHidden: '0x87e...6987E',
        avatar: Avatar,
        trb: 127,
    };
    const clickedAccount = {
        address: urlAddress,
        addressHidden: (urlAddress.substring(0,6) + '...' + urlAddress.substring(urlAddress.length - 4)),
        avatar: Avatar,
        trb: 0,
    };
    const sampleReporting = {
        earned: 102,
        current: "ETH/USD",
        total: 88,
        lastReported: "4 days ago"
    }
    const sampleHistory = [
        {   
            key: 1,
            symbols: "BTC/USD 24h TWAP",
            value: "45636.824417",
            reporter: "0x87e6...981B",
            accountID: "0x87e6981B",
            date: "22/09/2021, 14:25:33",
            avatar: Avatar,
        },
        {   
            key: 2,
            symbols: "ETH/USD",
            value: "45636.824417",
            reporter: "0x87e6...981B",
            accountID: "0x87e6981B",
            date: "22/09/2021, 14:25:33",
            avatar: Avatar,
        },
        {   
            key: 3,
            symbols: "BTC/USD",
            value: "45636.824417",
            reporter: "0x87e6...981B",
            accountID: "0x87e6981B",
            date: "22/09/2021, 14:25:33",
            avatar: Avatar,
        },
        {   
            key: 4,
            symbols: "BNB/USD",
            value: "4536.824417",
            reporter: "0x87e6...981B",
            accountID: "0x87e6981B",
            date: "22/08/2021, 14:25:33",
            avatar: Avatar,
        },{   
            key: 5,
            symbols: "BTC/USD 24h TWAP",
            value: "45636.82417",
            reporter: "0x87e6...981B",
            accountID: "0x87e6981B",
            date: "22/09/2021, 14:25:33",
            avatar: Avatar,
        },
        {   
            key: 6,
            symbols: "ETH/USD",
            value: "4566.824417",
            reporter: "0x87e6...981B",
            accountID: "0x87e6981B",
            date: "22/10/2021, 14:25:33",
            avatar: Avatar,
        },
        {   
            key: 7,
            symbols: "BTC/USD",
            value: "45636.82441",
            reporter: "0x87e6...981B",
            accountID: "0x87e6981B",
            date: "21/09/2021, 14:25:33",
            avatar: Avatar,
        },
        {   
            key: 8,
            symbols: "BNB/USD",
            value: "45636.824417",
            reporter: "0x87e6...981B",
            accountID: "0x87e6981B",
            date: "24/09/2021, 14:25:33",
            avatar: Avatar,
        },
        {   
            key: 9,
            symbols: "BNB/USD",
            value: "456.824417",
            reporter: "0x87e6...981B",
            accountID: "0x87e6981B",
            date: "22/09/2021, 14:25:33",
            avatar: Avatar,
        }
    ]
    const sampleActivities = [
        {   
            key: 1,
            action: "vote on dispute",
            description: "0x2024...8f52 supported dispute id 44",
            date: "22/09/2021, 14:25:33",
            txhash: "0x5d6b...32b4",
        },
        {   
            key: 2,
            action: "dispute value",
            description: "0x2024...8f52 disputed 99.99 for BTC/USD by 0x88p0F...D1Xc",
            date: "23/09/2021, 14:25:33",
            txhash: "0x5d6b...32b4",
        },
        {   
            key: 3,
            action: "vote on dispute",
            description: "0x2024...8f52 supported dispute id 44",
            date: "22/09/2021, 14:25:33",
            txhash: "0x5d6b...32b4",
        },
        {   
            key: 4,
            action: "vote on TIP",
            description: "0x2024...8f52 supported TIP id 12",
            date: "24/11/2021, 14:25:33",
            txhash: "0x5d6b...32b4",
        },{   
            key: 5,
            action: "dispute value",
            description: "0x2024...8f52 disputed 99.99 for BTC/USD by 0x88p0F...D1Xc",
            date: "23/09/2021, 14:25:33",
            txhash: "0x5d6b...32b4",
        },
        {   
            key: 6,
            action: "vote on TIP",
            description: "0x2024...8f52 supported TIP id 12",
            date: "24/11/2021, 14:25:33",
            txhash: "0x5d6b...32b4",
        },
    ]

    // const getHiddenAddress = (addr) => {
    //     return (addr.substring(0,6) + '...' + addr.substring(addr.length - 4))
    // }

    return (
        <div className="viewContainer">
            { showConnected
                ? <Connected 
                    userAccount={account} 
                    clickedAccount={account} 
                    reporting={reporting}
                    history={history}
                    activities={activities}
                    isReporter={isReporter} />
                : <Unconnected 
                    userAccount={userAccount} 
                    clickedAccount={clickedAccount} 
                    reporting={reporting}
                    history={history}
                    activities={activities}
                    isReporter={isReporter}/>
            }
        </div>
    )
}

export default Account;
