const ListItem = (props) => {
    const { todo } = props;
    
    const { title } = todo;
    return(
        <div style = {{ backgroundColor: "lightgrey" , margin: "10px", padding: "15px", width: "200px"}}>            
             
            <h5> {title} </h5>
    
        </div>
    )
}
export default ListItem
