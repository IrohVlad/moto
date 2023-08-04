import React from 'react'

export default function ({date, mot, track, number, email}) {
  return (
    <div className="book">
                        <div className="book_date">
                            {date}
                        </div>
                        <ul className="book__contacts">
                            {number && <li>
                                {number}
                            </li>}
                            {email && <li>
                                {email}
                            </li>}
                        </ul>
                        <ul className="book__info">
                            <li>{mot}</li>
                            <li>{track}</li>
                        </ul>
    </div>
  )
}
