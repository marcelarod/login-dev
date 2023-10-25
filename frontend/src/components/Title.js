export default function Title(props) {
    return (

        <div className="title">
            <h2><i className="fa-solid fa-arrow-right-to-bracket"></i> {props.title}</h2>
            <p className="sub">{props.subtitle}</p>
        </div>

    );
}