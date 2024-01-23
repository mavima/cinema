<?php

namespace App\Form;

use App\Entity\Actor;
use App\Entity\Movie;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\FileType;

class MovieFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title', TextType::class, [
                'attr' => array(
                    'class' => 'bg-transparent block corder-b-2 w-full h-20 text-xl outline-none border-b-2 border-indigo-600',
                    'placeholder' => 'Enter title...',
                    
                ),
                'label' => false
            ])
            ->add('releaseYear', IntegerType::class, [
                'attr' => array(
                    'class' => 'bg-transparent block corder-b-2 w-full h-20 text-xl outline-none border-b-2 border-indigo-600',
                    'placeholder' => 'Enter release year...',
                    
                ),
                'label' => false
            ])
            ->add('description', TextareaType::class, [
                'attr' => array(
                    'class' => 'bg-transparent block corder-b-2 w-full h-60 text-xl outline-none border-b-2 border-indigo-600',
                    'placeholder' => 'Enter description...',
                    
                ),
                'label' => false
            ])
            ->add('imagePath', FileType::class, array(
                'required' => false,
                'mapped' => false
            ))
//             ->add('actors', EntityType::class, [
//                 'class' => Actor::class,
// 'choice_label' => 'id',
// 'multiple' => true,
//             ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Movie::class,
        ]);
    }
}
