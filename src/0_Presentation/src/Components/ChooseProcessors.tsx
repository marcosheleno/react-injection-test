export const ChooseProcessor = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => {
    return (<select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value={"dataprev"}>Dataprev</option>
        <option value={"zetra"}>Zetra</option>
        <option value={"serpro"}>Serpro</option>
    </select>)
};