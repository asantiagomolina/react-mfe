import React, { Suspense } from "react"
import Header from "./Layout/Header";
//@ts-expect-error Can't resolve 'usermanagement/UserManager'
const UserManager = React.lazy(() => import("usermanagement/UserManager"))

const Layout = () => {

    return (
        <div>
            <Header />
            <Suspense fallback={'loading usermanager'}><UserManager /></Suspense>
        </div>
    );
}

export default Layout;
