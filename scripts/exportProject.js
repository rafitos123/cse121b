export const name = document.querySelector("name");

class Schedule {
    table (){
        this.arraySchedule = [];
    }

     information(){
        let schedule = this.data()
        this.validateForm(schedule)

        if (this.validateForm(schedule)){
            this.addSchedule(schedule)
        }

        console.log(this.arraySchedule);

    }
    addSchedule(schedule){
        this.arraySchedule.push(schedule);
    }

    data(){
            let mySchedule = {}
            mySchedule.nameOfSchedule = document.getElementById("schedule").value;
            mySchedule.timeOfSchedule = document.getElementById("appt").value;
            return mySchedule
    }
    
        validateForm (schedule){
            let message = "";
            if(schedule.nameOfSchedule == ""){
                message += "Please, add a schedule \n";
            }
            if(schedule.timeOfSchedule == ""){
                message += "Please, add a time to your schedule \n";
            }
    
            if(message != ""){
                alert(message);
                return false
            }
            return true;
        }
}
    
    
