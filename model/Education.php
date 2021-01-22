<?php 

    class Education{

        private $id;
        private $title;
        private $description;
        private $start_date;
        private $end_date;


        public function getId(){
            return $this->id;
        }

        public function setId($id){
             $this->id =$id;
             return $this;
        }

        public function getTitle(){
            return $this->title;
        }

        public function setTitle($title){
             $this->title =$title;
             return $this;
        }

        public function getDescription(){
            return $this->description;
        }

        public function setdDescription($description){
             $this->description =$description;
             return $this;
        }

        public function getStart_date(){
        return $this->start_date;
        }

        public function setdStart_date($start_date){
             $this->start_date =$start_date;
             return $this;
        }
        public function getEnd_date(){
        return $this->end_date;
        }

        public function setdEnd_date($end_date){
             $this->end_date =$end_date;
             return $this;
        }

    }
?>