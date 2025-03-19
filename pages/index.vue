<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content";

const { data: navigation } = await useAsyncData(
  "navigation",
  () => fetchContentNavigation(),
  { default: () => [] }
);

provide("navigation", navigation);

const links = ref([
  {
    label: "Get started",
    to: "/getting-started",
    icon: "i-lucide-square-play",
  },
  {
    label: "Learn more",
    to: "/getting-started/theme",
    color: "neutral",
    variant: "subtle",
    trailingIcon: "i-lucide-arrow-right",
  },
]);
</script>

<template>
  <div>
    <AppHeader />

    <UMain>
      <ULandingHero
        title="Convoyage voiture"
        description="Des centaines de convoyeurs professionnels inscrits."
        :links="links"
      />
      <ULandingSection
        :links="[
          {
            label: 'Explore components',
            color: 'gray',
            trailingIcon: 'i-heroicons-arrow-right',
            size: 'lg',
          },
        ]"
        align="left"
      >
        <template #title> Annonceurs </template>
        <template #description
          >Vous être une entreprise ou un particulier et avez besoin de déplacer
          un véhicule d’un point A à un point B.</template
        >
        <img
          src="https://convoyage.solenecurtius.com/wp-content/uploads/2025/01/annonceur_1-1024x683.jpg"
          class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
        />
      </ULandingSection>
      <UContainer>
        <div class="py-24 sm:py-32">
          <div class="grid grid-cols-3 gap-4">
            <div>Les avantages</div>
            <div>
              <div class="mx-auto grid grid-cols-1 gap-4">
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
              </div>
            </div>
            <div>
              <div class="mx-auto grid grid-cols-1 gap-4">
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
              </div>
            </div>
          </div>
        </div>
      </UContainer>
      <UContainer>
        <ULandingCTA
          title="N’hésitez plus et inscrivez vous sur la plateforme du convoyage"
          description="Suppression des intermédiaires > obtenez le tarif le plus juste !"
          card
          :links="[
            { label: 'Je suis convoyeur', color: 'blue', size: 'md' },
            {
              label: 'Je suis annonceur',
              color: 'blue',
              size: 'md',
            },
          ]"
        />
      </UContainer>
      <ULandingSection
        title="Convoyeurs"
        description="Vous êtes un professionnel du convoyage, possédez un ou plusieurs permis, une remorque/plateau, plaques W garage, assurances et RC pro et souhaitez développer votre activité."
        :features="[
          {
            name: 'Fully customizable',
            description:
              'Like Nuxt UI, change the style of any component from your App Config or customize them specifically through the ui prop.',
            icon: 'i-heroicons-wrench-screwdriver',
          },
          {
            name: 'Slots for everything',
            description:
              'Each component leverages the power of Vue\'s slots to give you the flexibility to build anything.',
            icon: 'i-heroicons-square-3-stack-3d',
          },
        ]"
        align="right"
      >
        <img
          src="https://convoyage.solenecurtius.com/wp-content/uploads/2025/01/convoyage_1-1024x684.jpg"
          class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
        />
      </ULandingSection>
      <UContainer>
        <div class="py-24 sm:py-32">
          <div class="grid grid-cols-3 gap-4">
            <div>Les avantages</div>
            <div>
              <div class="mx-auto grid grid-cols-1 gap-4">
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
              </div>
            </div>
            <div>
              <div class="mx-auto grid grid-cols-1 gap-4">
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
              </div>
            </div>
          </div>
        </div>
      </UContainer>
      <slot />
    </UMain>

    <AppFooter />
  </div>
</template>
<style scoped></style>
