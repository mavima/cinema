<?php

namespace App\DataFixtures;

use App\Entity\Movie;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class MovieFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $movie2 = new Movie();
        $movie2->setTitle("ET");
        $movie2->setReleaseYear(1982);
        $movie2->setDescription("Description of ET");
        $movie2->setImagePath("https://images.unsplash.com/photo-1641168780506-821166020087?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RVR8ZW58MHx8MHx8fDA%3D");
        $movie2->addActor($this->getReference('actor_3'));
        $movie2->addActor($this->getReference('actor_4'));
        $manager->persist($movie2);

        $movie1 = new Movie();
        $movie1->setTitle("Totoro");
        $movie1->setReleaseYear(1988);
        $movie1->setDescription("Description of Totoro");
        $movie1->setImagePath("https://www.bing.com/th?id=OIP.z2c8XdgryE53DIaSguSjoQAAAA&w=136&h=206&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2");
        $movie1->addActor($this->getReference('actor_1'));
        $movie1->addActor($this->getReference('actor_2'));
        $manager->persist($movie1);

        $manager->flush();
    }
}