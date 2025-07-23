import styles from './Skills.module.css'
import Lib_Fam from './Lib_Fam'
import WebLang from './WebLang'
import DeveloperTools from './DeveloperTools'
import ProLang from "./ProLang";
import DataBase from './DataBase';
function Skills(){
    return(
        <>
        <h2>SKILLS</h2>
        <WebLang/>
        <Lib_Fam/>
        <DeveloperTools/>
        <ProLang/>
        <DataBase/>
        </>
    )
}
export default Skills