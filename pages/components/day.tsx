import { ChangeEvent, Dispatch, SetStateAction } from 'react';

export const day = (props:{setDay:Dispatch<SetStateAction<string>>}) => {

  const onChangeDay = ( e: ChangeEvent) => {

    const target = e.target as HTMLSelectElement;

    props.setDay(target.value)

  }

  return (
    <div className='container'>
      <h3 className='title'>Choose the day and find out what the future holds</h3>
      <select className='select' name="day" onChange={onChangeDay} id="day">
        <option value="today">Today</option>
        <option value="yesterday">Yesterday</option>
        <option value="tomorrow">Tomorrow</option>
      </select>
      <style jsx>{
      `
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .title {
          font-size: 28px;
          font-weight: 500;
          margin: 40px 20px 40px 0px;
        }
        .select {
          border: solid 2px black;
          border-radius: 3px;
          height: 30px;
          font-size: 16px;
          font-family: 'Pushster', cursive;
        }
      `
    }</style>
    </div>




  )
}

export default day;