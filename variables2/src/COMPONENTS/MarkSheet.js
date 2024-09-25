import React from 'react'

function MarkSheet(props) {
    let engmarks=Number(props.engmarks);
    let telmarks= Number(props.telmarks);
    let hinmarks= Number(props.hinmarks);
    let matmarks=  Number(props.matmarks);
    let scimarks= Number (props.scimarks);
    let socmarks= Number (props.socmarks);
    let Total=engmarks+telmarks+hinmarks+matmarks+scimarks+socmarks;
    let per=(Total/600)*100
   
  return (
    <div>
       
      <table>
      <caption><b> {props.studentname} </b></caption>
        <thead>
            <tr>
                <th>subject</th>
                <th>min.marks</th>
                <th>obtained marks</th>
                <th>Result</th>
                <th>Remark</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>english</td>
                <td>100</td>
                <td>{engmarks}</td>
                <td>{ engmarks>=35 ? "pass" :"Fail"}</td>
                <td>excellent</td>
            </tr>
            <tr>
                <td>telugu</td>
                <td>100</td>
                <td>{telmarks}</td>
                <td>{telmarks>=35 ? "pass":"Fail"}</td>
                <td>excellent</td>
            </tr>
            <tr>
                <td>hindi</td>
                <td>100</td>
                <td>{hinmarks}</td>
                <td>{hinmarks >=35 ? "pass":"Fail"}</td>
                <td>{hinmarks >=35 ? "excellent" : "Poor"}</td>
            </tr>
            <tr>
                <td>maths</td>
                <td>100</td>
                <td>{matmarks}</td>
                <td>{matmarks>=35 ? "pass":"Fail"}</td>
                <td>excellent</td>
            </tr>
            <tr>
                <td>science</td>
                <td>100</td>
                <td>{scimarks}</td>
                <td>{scimarks>=35 ? "pass":"Fail"}</td>
                <td>excellent</td>
            </tr>
            <tr>
                <td>social</td>
                <td>100</td>
                <td>{socmarks}</td>
                <td>{socmarks>=35 ? "pass":"Fail"}</td>
                <td>excellent</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>Total</td>
                <td>600</td>
                <td>{Total} ({per}) </td>
                <td>pass</td>
                <td>excellent</td>
            </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default MarkSheet
