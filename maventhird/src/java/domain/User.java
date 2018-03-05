package domain;


public class User {
    private String phone;
    private String name;
    private String password;
    private String gender;

    public User(String phone,String name,String password,String gender){
        this.phone=phone;
        this.name=name;
        this.password=password;
        this.gender=gender;
    }

    public User(){
        this.phone="";
        this.name="";
        this.password="";
        this.gender="";
    }



    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
