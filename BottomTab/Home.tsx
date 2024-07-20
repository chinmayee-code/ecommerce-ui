import {StyleSheet, View} from 'react-native';
import React from 'react';
import {
  Container,
  ScrollView,
  Image,
  NativeBaseProvider,
  Text,
  Avatar,
  Heading,
  Input,
  Box,
  AspectRatio,
  Center,
  IconButton,
  FlatList,
  VStack,
  HStack,
  Stack,
  Button,
  Divider,
} from 'native-base';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import ImageWithStatics from 'native-base/lib/typescript/components/primitives/Image';
import {baseFontSize} from 'native-base/lib/typescript/theme/tools';

const icons = [
  {
    id: 1,
    name: 'cleaning-services',
    bg: 'purple.300',
    color: 'purple.900',
    title: 'Cleaning',
  },
  {
    id: 2,
    name: 'construction',
    bg: 'orange.200',
    color: 'orange.900',
    title: 'Repairing',
  },
  {
    id: 3,
    name: 'format-paint',
    bg: 'blue.200',
    color: 'blue.900',
    title: 'Painting',
  },
  {
    id: 4,
    name: 'local-laundry-service',
    bg: 'yellow.200',
    color: 'yellow.900',
    title: 'Laundry',
  },
  {
    id: 5,
    name: 'settings-applications',
    bg: 'rose.200',
    color: 'rose.900',
    title: 'Appliance',
  },
  {
    id: 6,
    name: 'plumbing',
    bg: 'green.200',
    color: 'green.900',
    title: 'Plumbing',
  },
  {
    id: 7,
    name: 'delivery-dining',
    bg: 'primary.200',
    color: 'primary.900',
    title: 'Shifting',
  },
  {
    id: 8,
    name: 'more',
    bg: 'purple.300',
    color: 'purple.900',
    title: 'More',
  },
];

const Home = () => {
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Container flexDirection={'row'}>
          <Avatar
            bg="green.500"
            size="md"
            mt="5"
            ml={5}
            source={{
              uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            }}>
            {' '}
            AJ
          </Avatar>
          <Text mt="5" ml={5} fontWeight="small">
            Good Morning
          </Text>

          <Image
            source={require('../assets/images/hand.png')}
            alt="Alternate Text"
            size="2xs"
            ml={1}
            mt="4"
          />
          <Fontisto
            name="bell"
            size={25}
            style={{marginTop: 30, marginLeft: 110}}
          />
          <MaterialCommunityIcons
            name="bookmark-minus-outline"
            size={29}
            style={{marginTop: 29, marginLeft: 12}}
          />
        </Container>
        <Heading mt={-7} ml={20} size="md">
          Andrew Ainsley
        </Heading>
        <Input
          variant="filled"
          placeholder="Search"
          mt={4}
          w={{base: '90%', md: '25%'}}
          bgColor={'white'}
          ml={5}
          InputLeftElement={
            <Feather
              name="search"
              size={29}
              style={{marginLeft: 4}}
              color="muted.900"
            />
          }
        />
        <Container flexDirection={'row'}>
          <Text mt="4" ml={5} fontWeight="700" fontSize={20}>
            Special Offers
          </Text>
          <Text mt="5" ml={176} fontWeight="bold" color={'purple.600'}>
            See All
          </Text>
        </Container>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={require('../assets/images/card1.jpg')}
              size="3xl"
              mr={5}
              ml={5}
              mt="4"
              rounded="xl"
            />
          </AspectRatio>
          <Center
            _text={{
              color: 'warmGray.50',
              fontWeight: '700',
              fontSize: '4xl',
            }}
            position="absolute"
            ml={240}
            mt={9}>
            30%
          </Center>
          <Center
            _text={{
              color: 'warmGray.50',
              fontWeight: '700',
              fontSize: 'lg',
            }}
            position="absolute"
            ml={210}
            mt={90}>
            Today's Special!
          </Center>
          <Center
            _text={{
              color: 'warmGray.50',
              fontWeight: '400',
              fontSize: 'sm',
            }}
            position="absolute"
            ml={210}
            mt={120}>
            Get discount for every
          </Center>
          <Center
            _text={{
              color: 'warmGray.50',
              fontWeight: '400',
              fontSize: 'sm',
            }}
            position="absolute"
            ml={210}
            mt={135}>
            order, only valid for today
          </Center>
          <Center
            h={1.5}
            w={1.5}
            bg={'white'}
            borderRadius={90}
            ml={220}
            position={'absolute'}
            mt={200}></Center>
          <Center
            h={1.5}
            w={1.5}
            bg={'white'}
            borderRadius={90}
            ml={200}
            position={'absolute'}
            mt={200}></Center>
          <Center
            h={1.5}
            w={1.5}
            bg={'white'}
            borderRadius={90}
            ml={180}
            position={'absolute'}
            mt={200}></Center>
          <Center
            h={1.5}
            w={7}
            bg={'white'}
            borderRadius={90}
            ml={140}
            position={'absolute'}
            mt={200}></Center>
        </Box>
        <Container flexDirection={'row'}>
          <Text mt="4" ml={5} fontWeight="700" fontSize={20}>
            Services
          </Text>
          <Text mt="5" ml={220} fontWeight="bold" color={'purple.600'}>
            See All
          </Text>
        </Container>
        <FlatList
          numColumns={4}
          data={icons}
          renderItem={({item}) => {
            return (
              <VStack>
                <IconButton
                  m={'20px'}
                  borderRadius="full"
                  bg={item.bg}
                  variant="solid"
                  p="4"
                  icon={
                    <Icon
                      color={item.color}
                      name={item.name}
                      // as={MaterialIcons}
                      size={25}
                    />
                  }
                />
                <Box
                  _text={{
                    fontWeight: 'bold',
                    fontSize: 'md',
                    color: 'black',
                    marginLeft: 5,
                  }}>
                  {item.title}
                </Box>
              </VStack>
            );
          }}
        />
        <Container flexDirection={'row'}>
          <Text mt="4" ml={5} fontWeight="700" fontSize={20}>
            Services
          </Text>
          <Text mt="5" ml={220} fontWeight="bold" color={'purple.600'}>
            See All
          </Text>
        </Container>
        <HStack>
          <Stack
            mb="2.5"
            mt="6"
            direction={{
              base: 'row',
            }}
            space={2}
            mx={{
              base: 'auto',
              md: '0',
            }}>
            <Button size="md" colorScheme="fuchsia" borderRadius={18} ml={3}>
              ALL
            </Button>
            <Button
              size="md"
              variant={'outline'}
              colorScheme="fuchsia"
              borderColor={'fuchsia'}
              borderRadius={20}
              ml={3}>
              Cleaning
            </Button>
            <Button
              size="md"
              variant={'outline'}
              colorScheme="fuchsia"
              borderColor={'fuchsia'}
              borderRadius={20}
              ml={3}>
              Repairing
            </Button>
            <Button
              size="md"
              variant={'outline'}
              colorScheme="fuchsia"
              borderColor={'fuchsia'}
              borderRadius={20}
              ml={3}>
              Painting
            </Button>
          </Stack>
        </HStack>
        <VStack space={4}>
          <Box bg={'white'} p="9" w={360} h={170} ml={5} rounded="xl">
            <Stack p="3" space={2}>
              <Stack space={1}>
                <Image
                  source={require('../assets/images/img1.jpeg')}
                  size={'lg'}
                  ml={-10}
                  borderRadius={10}
                />
                <Text ml="24" mt={-100} justifyContent="space-between">
                  Kylee Danford
                </Text>
                <MaterialCommunityIcons
                  name="bookmark-minus-outline"
                  size={29}
                  color={'purple'}
                  style={{marginTop: -30, marginLeft: 240}}
                />
                <Heading size="md" ml="24">
                  House Cleaning
                </Heading>
                <Text
                  fontSize="xs"
                  _light={{
                    color: 'violet.500',
                  }}
                  _dark={{
                    color: 'purple.900',
                  }}
                  fontWeight="900"
                  ml="24"
                  mt="-1">
                  $25
                </Text>
              </Stack>

              <HStack space={4} justifyContent="space-between">
                <HStack ml="20" mt={-5} direction="row" h="54" p="4">
                  <Image
                    source={require('../assets/images/starr.png')}
                    size="2xs"
                  />
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: 'warmGray.200',
                    }}
                    fontWeight="400">
                    4.8
                  </Text>
                  <Divider
                    bg="warmGray.400"
                    thickness="2"
                    mx="2"
                    orientation="vertical"
                  />
                  <Text>8,289 reviews</Text>
                </HStack>
              </HStack>
            </Stack>
          </Box>

          <Box bg={'white'} p="9" w={360} h={170} ml={5} rounded="xl">
            <Stack p="3" space={2}>
              <Stack space={1}>
                <Image
                  source={require('../assets/images/img2.jpeg')}
                  size={'lg'}
                  ml={-10}
                  borderRadius={10}
                />
                <Text ml="24" mt={-100} justifyContent="space-between">
                  Alfonzo Schuessier
                </Text>
                <MaterialCommunityIcons
                  name="bookmark-minus-outline"
                  size={29}
                  color={'purple'}
                  style={{marginTop: -30, marginLeft: 240}}
                />
                <Heading size="md" ml="24">
                  Floor Cleaning
                </Heading>
                <Text
                  fontSize="xs"
                  _light={{
                    color: 'violet.500',
                  }}
                  _dark={{
                    color: 'purple.900',
                  }}
                  fontWeight="900"
                  ml="24"
                  mt="-1">
                  $20
                </Text>
              </Stack>

              <HStack space={4} justifyContent="space-between">
                <HStack ml="20" mt={-5} direction="row" h="54" p="4">
                  <Image
                    source={require('../assets/images/starr.png')}
                    size="2xs"
                  />
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: 'warmGray.200',
                    }}
                    fontWeight="400">
                    4.9
                  </Text>
                  <Divider
                    bg="warmGray.400"
                    thickness="2"
                    mx="2"
                    orientation="vertical"
                  />
                  <Text>6,182 reviews</Text>
                </HStack>
              </HStack>
            </Stack>
          </Box>

          <Box bg={'white'} p="9" w={360} h={170} ml={5} rounded="xl">
            <Stack p="3" space={2}>
              <Stack space={1}>
                <Image
                  source={require('../assets/images/img3.jpeg')}
                  size={'lg'}
                  ml={-10}
                  borderRadius={10}
                />
                <Text ml="24" mt={-100} justifyContent="space-between">
                  Sanjuanita Ordonez
                </Text>
                <MaterialCommunityIcons
                  name="bookmark-minus-outline"
                  size={29}
                  color={'purple'}
                  style={{marginTop: -30, marginLeft: 240}}
                />
                <Heading size="md" ml="24">
                  Washing Clothes
                </Heading>
                <Text
                  fontSize="xs"
                  _light={{
                    color: 'violet.500',
                  }}
                  _dark={{
                    color: 'purple.900',
                  }}
                  fontWeight="900"
                  ml="24"
                  mt="-1">
                  $22
                </Text>
              </Stack>

              <HStack space={4} justifyContent="space-between">
                <HStack ml="20" mt={-5} direction="row" h="54" p="4">
                  <Image
                    source={require('../assets/images/starr.png')}
                    size="2xs"
                  />
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: 'warmGray.200',
                    }}
                    fontWeight="400">
                    4.7
                  </Text>
                  <Divider
                    bg="warmGray.400"
                    thickness="2"
                    mx="2"
                    orientation="vertical"
                  />
                  <Text>7,938 reviews</Text>
                </HStack>
              </HStack>
            </Stack>
          </Box>

          <Box bg={'white'} p="9" w={360} h={170} ml={5} rounded="xl">
            <Stack p="3" space={2}>
              <Stack space={1}>
                <Image
                  source={require('../assets/images/img4.jpeg')}
                  size={'lg'}
                  ml={-10}
                  borderRadius={10}
                />
                <Text ml="24" mt={-100} justifyContent="space-between">
                  Freido Varnes
                </Text>
                <MaterialCommunityIcons
                  name="bookmark-minus-outline"
                  size={29}
                  color={'purple'}
                  style={{marginTop: -30, marginLeft: 240}}
                />
                <Heading size="md" ml="24">
                  Bathroom Cleaning
                </Heading>
                <Text
                  fontSize="xs"
                  _light={{
                    color: 'violet.500',
                  }}
                  _dark={{
                    color: 'purple.900',
                  }}
                  fontWeight="900"
                  ml="24"
                  mt="-1">
                  $24
                </Text>
              </Stack>

              <HStack space={4} justifyContent="space-between">
                <HStack ml="20" mt={-5} direction="row" h="54" p="4">
                  <Image
                    source={require('../assets/images/starr.png')}
                    size="2xs"
                  />
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: 'warmGray.200',
                    }}
                    fontWeight="400">
                    4.9
                  </Text>
                  <Divider
                    bg="warmGray.400"
                    thickness="2"
                    mx="2"
                    orientation="vertical"
                  />
                  <Text>6,134 reviews</Text>
                </HStack>
              </HStack>
            </Stack>
          </Box>
        </VStack>
      </ScrollView>
    </NativeBaseProvider>
  );
};
export default Home;
