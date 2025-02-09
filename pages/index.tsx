import {NextPage} from 'next';

import About from '../components/About';
import Story from '../components/Story';
import PublicationList from '../components/PublicationList';
import Teaching from '../components/Teaching';
import Education from '../components/Education';


const Index: NextPage<unknown> = () => (
    <>
        <About/>
        <Story/>
        {/* <PublicationList/> */}
        
        <Education/>
        <Teaching/>
    </>
);

export default Index;
