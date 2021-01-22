<?php
    include_once('model/Personal.php');

    class PersonalDao{

        private $conn;
 
    public function __construct() {
        $registry = Registry::getInstance();
        $this->conn = $registry->get('Connection');
    }
    public function getAll() {
        $statement = $this->conn->query(
            'SELECT * FROM posts'
        );
 
        return $this->processResults($statement);
    }
    private function processResults($statement) {
        $results = array();
 
        if($statement) {
            while($row = $statement->fetch(PDO::FETCH_OBJ)) {
                $personal = new Personal();
 
                $personal->setId($row->id);
                $personal->setName($row->name);
                $personal->setBio($row->bio);
                $personal->setDescription($row->description);
                $personal->setAge($row->age);
                $personal->setEmail($row->email);
                $personal->setBio($row->bio);
                $personal->setBio($row->bio);
 
                $results[] = $post;
            }
        }
 
        return $results;
    }

    }

?>