import React, {Suspense} from 'react';
import {AppRouter} from 'app/providers/router';
import {Layout} from "shared/ui";

import './css/index.scss';

function App() {
    return (
        <Suspense fallback={<div>loading...</div>}>
            <Layout>
                <AppRouter/>
            </Layout>
        </Suspense>
    );
}

export default App;
