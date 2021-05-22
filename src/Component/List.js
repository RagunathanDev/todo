import React from "react";
import { Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import EditIcon from "@material-ui/icons/Edit";
import Card from "@material-ui/core/Card";
import "./List.css";
export default function List({ Item, remove, changeTask, edit }) {
  return Item.status === 0 ? (
    <Card className='card_TopContainer'>
      <div className='card_Container'>
        <div className='Container'>
          <div className='task_Container'>
            <Checkbox
              checked={Item.status === 1 ? true : false}
              onChange={() => changeTask()}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <div className='task_Div'>
              <p className='task'>{Item.taskName}</p>
            </div>
          </div>

          <div className='Icon__Container'>
            <IconButton
              aria-label='delete'
              color='primary'
              onClick={() => remove()}>
              <DeleteIcon />
            </IconButton>
            <IconButton
              aria-label='edit'
              color='primary'
              onClick={() => edit()}>
              <EditIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </Card>
  ) : (
    <Card className='card_TopContainer'>
      <div className='card_Container'>
        <div className='Container'>
          <div className='task_Container'>
            <Checkbox
              checked={Item.status === 1 ? true : false}
              onChange={() => changeTask()}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <p className='task'>{Item.taskName}</p>
          </div>

          <div className='Icon__Container'>
            <IconButton
              aria-label='delete'
              color='primary'
              onClick={() => remove()}>
              <DeleteIcon />
            </IconButton>
            <IconButton
              disabled
              aria-label='edit'
              color='primary'
              onClick={() => edit()}>
              <EditIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </Card>
  );
}
