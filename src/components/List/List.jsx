import React from 'react';
import Book from '../Book/Book';



const List = (props) => {
     const data = [
         {title:"BookTitle", author: "peter kay", genre:"thriller"},
         {title:"part1", author: "michael kay", genre:"comedy"},
         {title:"theend", author: "jeremy kay", genre:"horror"}
     ];

        const books = data.map( (bookSrc) =>
            {
                return <Book title={bookSrc.title} author={bookSrc.author} genre={bookSrc.genre}/>;

            }
        );

      


    return(
        <main>
            <u><h3>{props.title}</h3></u>
            {books[0]}
            
        <div class="container">
        <table class="table table-bordered table-hover table-sm">

        <tr class="table-info text-danger">
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
        </tr>

        <tr class="table-secondary">
        <td>{books[0]}</td>
        <td><Book author='author1'></Book></td>
        <td><Book genre='genre1'></Book></td>

        </tr>

        <tr class="table-secondary">
        <td><Book title='not a diet book'></Book></td>
        <td><Book author='james '></Book></td>
        <td><Book genre='fitness'></Book></td>

        </tr>

        <tr class="table-secondary">
        <td><Book title='how not to die'></Book></td>
        <td><Book author='gregg'></Book></td>
        <td><Book genre='health'></Book></td>

        </tr>



        </table>
        </div>
        
      </main>
    );
};


//function name(argument) {
    //body
    //return value;
//}
//name(1);
export default List;
