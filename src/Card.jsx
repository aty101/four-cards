export default function Card({title,content,icon,className}){
    return(
        <div className={`card ${className}`}>
            
        <h3>{title}</h3>
        <p>{content}</p>

        <div>{icon}</div>
        </div>
    );
}