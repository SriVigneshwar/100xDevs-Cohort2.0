

export function BusinessCard({props}){


    return(
        <div style={styles.card}>
            <h2 style={styles.name}>{props.name}</h2>
            <p style={styles.description}>{props.description}</p>
            <h3 style={styles.interestHeader}>{props.interestHeader}</h3>
            <ul style={styles.interestsList}>
                {props.interests.map((interest) => (
                    <li key={interest} style={styles.interestItem}>
                    {interest}
                    </li>
            ))}
            </ul>
            <div style={styles.socialLinks}>
                <a style={styles.links} href={props.linkedin} target='_blank'>Linkedin</a>
                <a style={styles.links} href={props.twitter} target='_blank'>Twitter</a>
            </div>
        </div>
    )
}

const styles = {
    card: {
        border: '1px solid black',
        borderRadius: '8px',
        padding: '2rem',
        margin: '2rem',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'whitesmoke',
        width: '20%'
    },
    name:{
        fontSize: '1.5rem',
        marginBottom: '1rem',
        color: '#333'
    },
    description:{
        fontSize: '0.7rem',
        marginBottom: '1rem',
        color: '#555'
    },
    interestHeader:{
        fontSize: '1rem',
        marginBottom: '1rem',
        color: '#333'
    },
    interestList:{
        listStyle : 'none',
        margin: 0,
        padding: 0
    },
    listItem:{
        fontSize: '0.5rem',
        marginBottom: '5px',
        color: '#555'
    },
    socialLinks:{
        display: 'flex',
        marginBottom: '15px'
    },
    links:{
        textDecoration: 'none',
        color: '#fff',
        padding: '10px 15px',
        borderRadius: '5px',
        backgroundColor: '#007BFF',
        display: 'inline-block',
        margin: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    },
    interestItem: {
        fontSize: '14px',
        marginBottom: '5px',
        color: '#555',
    }
};
