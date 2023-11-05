import React from 'react'
import UserInfo from './UserInfo'
import StorageInfo from './StorageInfo'
import StorageDetailList from './StorageDetailList'
import StorageUpgradeMsg from './StorageUpgradeMsg'
import { useSession } from 'next-auth/react'
import StorageMessage from './StorageMessage';

function Storage() {
    const {data:session}=useSession();
  return session&&(
    <div className="bg-white p-5 order-first md:order-last h-full">
        <UserInfo/>
        <StorageInfo/>
        <StorageDetailList/>
        <StorageMessage/>
        <StorageUpgradeMsg/>
        
    </div>
  )
}

export default Storage