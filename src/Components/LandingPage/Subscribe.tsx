import { Button, TextInput } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const Subscribe=()=>{
    const matches=useMediaQuery('(max-width:639px)');
    const matches2=useMediaQuery('(max-width:475px)');
    return <div className="mt-20 flex items-center bg-mine-shaft-900 mx-20 sm-mx:mx-5 py-3 rounded-xl justify-around flex-wrap">
        <div className="text-4xl md-mx:text-3xl sm-mx:text-2xl xs-mx:text-xl w-2/5 bs-mx:w-4/5 text-center font-semibold text-mine-shaft-100 ">Never Wants to Miss Any <span className="text-bright-sun-400">Job News?</span></div>
        <div className="flex gap-4 rounded-xl bg-mine-shaft-700 px-3 py-2 xs:items-center xs-mx:flex-col ">
            <TextInput className="[&_input]:text-mine-shaft-100 font-semibold" variant="unstyled" placeholder="Your@gmail.com" size={matches2?"sm":matches?"md":"lg"}/>
            <Button className="!rounded-lg" size={matches2?"sm":matches?"md":"lg"} color="brightSun.4" variant="filled">Subscribe</Button>
        </div>
    </div>
}
export default Subscribe;