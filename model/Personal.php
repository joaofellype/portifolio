<?php
    class Personal{

        private $id;
        private $name;
        private $bio;
        private $description;
        private $age;
        private $email;
        private $link;
        private $contact;
        private $city;

        public function getId(){
            return $this->id;
        }

        public function setId($id){
             $this->id =$id;
             return $this;
        }

        public function getName(){
           return $this->name ;
        }

        public function setName($name){
            $this->name = $name;
            return $this;
        }

        public function getBio(){
            return $this->bio;
        }

        public function setBio($bio){
            $this ->bio = $bio;
            return $this;
        }

        public function getDescription(){
            return $this->description;
        }

        public function setDescription($description){
        $this ->description = $description;
            return $this;
        }


        public function getAge(){
            return $this->age;
        }

        public function setAge($age){
        $this ->age = $age;
            return $this;
        }
        public function getEmail(){
            return $this->email;
        }

        public function setEmail($email){
        $this ->email = $email;
            return $this;
        }
        public function getLink(){
            return $this->link;
        }

        public function setLink($link){
        $this ->link = $link;
            return $this;
        }
        public function getContact(){
            return $this->contact;
        }

        public function setContact($contact){
        $this ->contact = $contact;
            return $this;
        }
        public function getCity(){
            return $this->city;
        }

        public function setCity($city){
        $this ->city = $city;
            return $this;
        }

        

    }

?>