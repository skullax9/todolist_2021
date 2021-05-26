import React from 'react';
import './App.css';
import {TextField, Typography, Button, List, ListItem, ListItemText} from '@material-ui/core';
import {KeyboardDatePicker,KeyboardTimePicker} from '@material-ui/pickers'
import SaveIcon from '@material-ui/icons/Save';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      title : "",
      content: "",
      startDate: null,
      startTime: null,
      endDate: null,
      endTime: null
    }
  }

  checkValidate() {
    const {
      title,content,startDate,startTime,endDate,endTime
    } = this.state;
    var start = new Date(startDate);
    var end = new Date(endDate);
    var st = new Date(startTime);
    var et = new Date(endTime);
    if(!title.trim() || !content.trim() || !startDate || !startTime || !endDate || !endTime ){
      alert("빈칸을 채워주세요.");
      return false;
    } else if (end < start) {
      alert("종료 예정일이 시작 예정일보다 빠릅니다!");
      return false;
    } else if ((end = start) && (et < st)) {
      alert("종료 시간이 시작 시간보다 빠릅니다!");
      return false;
    }
    return true;
  }
  
  saveTodoList() {
    if(this.checkValidate()){
      const{ 
        todoList,title,content,startDate,startTime,endDate,endTime
      } = this.state;
    todoList.push({title,content,startDate,startTime,endDate,endTime});
    this.setState({
      todoList,
      // title : "",
      // content: "",
      // startDate: null,
      // startTime: null,
      // endDate: null,
      // endTime: null
    });
  }
}

  render() {
  return (
    <div className="App">
      <div className="header">TODO LIST</div>
      <div className="input_area">
        <TextField 
          label="제목" size="normal" margin="normal" fullWidth required
          value={this.state.title}
          onChange= {(e) => this.setState({title : e.target.value})}
        />
        <TextField 
          label="상세내용" size="normal" margin="normal" fullWidth multiline
          value={this.state.content}
          onChange= {(e) => this.setState({content : e.target.value})}
        />
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="yyyy/MM/DD"
          margin="normal"
          label="시작 예정일"
          value={this.state.startDate}
          onChange={(value)=>{
            return this.setState({startDate : value})
            }
          }
          style = {{width: '50%'}}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}/>

        <KeyboardTimePicker
          margin="normal"
          label="시작 시간"
          variant="inline"
          value={this.state.startTime}
          onChange={(value)=>{
            return this.setState({startTime : value})
            }
          }
          style = {{width: '50%'}}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}/>

        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="yyyy/MM/DD"
          margin="normal"
          label="종료 예정일"
          value={this.state.endDate}
          onChange={(value)=>{
            return this.setState({endDate : value})
            }
          }
          style = {{width: '50%'}}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}/>

        <KeyboardTimePicker
          margin="normal"
          label="종료 시간"
          variant="inline"
          value={this.state.endTime}
          onChange={(value)=>{
            return this.setState({endTime : value})
            }
          }
          style = {{width: '50%'}}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}/>

          <Button
          variant="outlined"
          startIcon={<SaveIcon/>}
          style={{float:'right'}}
          onClick={() => this.saveTodoList()}>
            Save
          </Button>
        </div>
         <div className="list_area">
           <List>
             {this.state.todoList.map((todoItem,idx) => {
               const {
                 title, content, startDate,startTime, endDate, endTime
               } = todoItem;
               return (
                 <ListItem key={idx} role={undefined} dense button>
                   <ListItemText
                   primary={title}
                   secondary={startDate?.format('yyyy-MM-DD')+' '+startTime?.format('HH:MM')+' ~ '+endDate?.format('yyyy-MM-DD')+' '+endTime?.format('HH:MM')}
                   />
                 </ListItem>
               )
             })}
             </List>
      </div>
      <div className="list_area"></div>
      <Typography variant="body2" color="textSecondary" align="center">
        { 'Copyright '+new Date().getFullYear()+'.' }
      </Typography>
    </div>
  );
}
};

export default App;
