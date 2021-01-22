<?php

    class Skills{

        private $id;
        private $tile;
        private $percent;

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
             $this->percent =$percent;
             return $this;
        }
        public function getPercent(){
            return $this->percent;
        }

        public function setPercent($percent){
             $this->percent =$percent;
             return $this;
        }

    }

?>