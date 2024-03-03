export function InputBox({label, placeHolder, onChange, ipType, value}){
    return <div>
        <div className="text-base font-medium text-left py-2">
            {label}
        </div>
        <input value={value} type={ipType ? ipType : "text"} onChange={onChange} placeholder={placeHolder} className="w-full px-1 py-1 border rounded border-slate-200"/>
    </div>
}