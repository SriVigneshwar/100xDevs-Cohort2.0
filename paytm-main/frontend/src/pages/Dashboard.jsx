import { Appbar } from "../components/Appbar";
import { Users } from "../components/Users";
import { Balance } from "../components/Balance"

export function Dashboard(){
    return(
        <div>
            <Appbar UserName={'Viki'}/>
            <div className="m-8">
                <Balance balanceAmt={'10,000'}/>
                <Users/>
            </div>
        </div>
    )
}