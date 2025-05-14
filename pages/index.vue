<script setup lang="ts">
const links = ref([
  {
    label: "Get started",
    to: "/",
    icon: "i-lucide-square-play",
    size: "xl",
  },
  {
    label: "Learn more",
    to: "/",
    variant: "subtle",
    trailingIcon: "i-lucide-arrow-right",
    size: "xl",
  },
]);
</script>

<template>
  <div>
    <UPageHero
      title="Convoyage voiture"
      description="Des centaines de convoyeurs professionnels inscrits."
      :links="links"
    />
    <UPageSection
      title="Annonceurs"
      description="Vous être une entreprise ou un particulier et avez besoin de déplacer
          un véhicule d’un point A à un point B."
      orientation="horizontal"
    >
      <img
        src="https://convoyage.solenecurtius.com/wp-content/uploads/2025/01/annonceur_1-1024x683.jpg"
        class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
      />
    </UPageSection>
    <UPageSection title="Les avantages">
      <UPageGrid>
        <UPageCard
          title="Un interlocuteur unique"
          description="que vous avez choisi"
          icon="i-simple-icons-tailwindcss"
        />
        <UPageCard
          title="Transmission automatique"
          description="de votre annonce auprès de tous les convoyeurs inscrits."
          icon="i-simple-icons-tailwindcss"
        />
        <UPageCard
          title="Des profils multiples vérifiés"
          description="(VL, Poids lourds, assurances convoyages/RC pro, W garage…)."
          icon="i-simple-icons-tailwindcss"
        />
      </UPageGrid>
      <UPageGrid>
        <UPageCard
          title="Un interlocuteur unique"
          description="que vous avez choisi"
          icon="i-simple-icons-tailwindcss"
        />
        <UPageCard
          title="Transmission automatique"
          description="de votre annonce auprès de tous les convoyeurs inscrits."
          icon="i-simple-icons-tailwindcss"
        />
        <UPageCard
          title="Des profils multiples vérifiés"
          description="(VL, Poids lourds, assurances convoyages/RC pro, W garage…)."
          icon="i-simple-icons-tailwindcss"
        />
      </UPageGrid>
    </UPageSection>
    <UPageCTA
      title="N’hésitez plus et inscrivez vous sur la plateforme du convoyage"
      description="Suppression des intermédiaires > obtenez le tarif le plus juste !"
      variant="soft"
      class="overflow-hidden"
      :links="[
        { label: 'Je suis convoyeur', color: 'primary', size: 'md' },
        {
          label: 'Je suis annonceur',
          color: 'primary',
          size: 'md',
        },
      ]"
    >
    </UPageCTA>
    <UPageSection
      title="Comment ça marche ?"
      description="Vous êtes un professionnel du convoyage, possédez un ou plusieurs permis, une remorque/plateau, plaques W garage, assurances et RC pro et souhaitez développer votre activité."
      orientation="horizontal"
      :reverse="true"
    >
      <img
        src="https://convoyage.solenecurtius.com/wp-content/uploads/2025/01/convoyage_1-1024x684.jpg"
        class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
      />
    </UPageSection>

    <UPageSection title="Les avantages">
      <UPageGrid>
        <UPageCard
          title="Un interlocuteur unique"
          description="que vous avez choisi"
          icon="i-simple-icons-tailwindcss"
        />
        <UPageCard
          title="Transmission automatique"
          description="de votre annonce auprès de tous les convoyeurs inscrits."
          icon="i-simple-icons-tailwindcss"
        />
        <UPageCard
          title="Des profils multiples vérifiés"
          description="(VL, Poids lourds, assurances convoyages/RC pro, W garage…)."
          icon="i-simple-icons-tailwindcss"
        />
      </UPageGrid>
      <UPageGrid>
        <UPageCard
          title="Un interlocuteur unique"
          description="que vous avez choisi"
          icon="i-simple-icons-tailwindcss"
        />
        <UPageCard
          title="Transmission automatique"
          description="de votre annonce auprès de tous les convoyeurs inscrits."
          icon="i-simple-icons-tailwindcss"
        />
        <UPageCard
          title="Des profils multiples vérifiés"
          description="(VL, Poids lourds, assurances convoyages/RC pro, W garage…)."
          icon="i-simple-icons-tailwindcss"
        />
      </UPageGrid>
    </UPageSection>
  </div>
</template>
<style scoped></style>
