export function Balance({balanceAmt}){
    return <div className="flex">
        <div className="font-bold text-lg">
            Your balance is
        </div>
        <div className="font-semibold text-lg ml-4">
            Rs {balanceAmt}
        </div>
    </div>
}