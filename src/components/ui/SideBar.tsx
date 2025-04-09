import { ClusterChecker, ClusterUiSelect } from '../cluster/cluster-ui'
import { AccountChecker } from '../account/account-ui'

import { WalletButton } from '../solana/solana-provider'
import { Link, useLocation } from 'react-router'
export default function SideBar({ links }: { links: { label: string; path: string }[] }) {
  const pathname = useLocation().pathname

  return (
    <ul className="menu bg-base-200 rounded-box sticky top-0 right-0 min-h-screen border-r border-neutral-200">
      <Link className="btn btn-ghost normal-case text-xl" to="/">
        SolTweet
      </Link>

      <li>
        <div className="flex flex-col">
          <WalletButton />
          <ClusterUiSelect />
        </div>
      </li>
      <ClusterChecker>
        <AccountChecker />
      </ClusterChecker>
      <>
        {links.map(({ label, path }) => (
          <li key={path}>
            <Link className={pathname.startsWith(path) ? 'active' : ''} to={path}>
              {label}
            </Link>
          </li>
        ))}
      </>
    </ul>
  )
}
