import './styles/index.scss';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar } from '@/widgets/Navbar';
import { AppRouter } from '@/app/providers/router';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserInited, userActions } from '@/entities/User';
import { classNames } from '@/shared/lib/ClassNames/classNames';

const App = () => {
    const dispatch = useDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div
            className={classNames('app', {}, [])}
        >
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};

export default App;
